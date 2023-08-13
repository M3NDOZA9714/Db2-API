import fs from 'fs';
import path from 'path'
import { poolPromise, mssql } from '../database/index'

// Read the JSON file
const filePath = path.resolve(__dirname, '../model/payment.model.json');
const data = fs.readFileSync(filePath, 'utf8');
const json = JSON.parse(data);

// Create an object to store the generated functions
const functions: { [key: string]: Function } = {};

// Iterate over the keys in the JSON object
// Iterate over the keys in the JSON object
for (const element of json) {
    // Iterate over the keys in the current element
    for (const key of Object.keys(element)) {
        // Get the function name, parameters, and query
        const functionName = key;
        const params = element[key].params;
        const query = element[key].query;
        const type = element[key].type;

        // Generate an asynchronous function with the given name and parameters
        functions[functionName] = async (...args: any[]) => {
            // Create an object to store the parameter values
            const paramValues: { [key: string]: any } = {};

            // Assign the parameter values from the arguments
            for (let i = 0; i < params.length; i++) {
                paramValues[params[i].Param] = args[i];
            }

            // Get a database connection from the pool
            const pool = await poolPromise;
            if (pool instanceof Error) {
                throw pool;
            }

            // Create a new request object
            const request = pool.request();

            // Add the parameter values to the request
            for (let i = 0; i < params.length; i++) {
                const paramName = params[i].Param;

                var paramType: any;
                var paramValue: any;
                if (params[i].Type == "Table") {
                    const table = new mssql.Table();
                    params[i].Cols.forEach((element: any) => {
                        table.columns.add(element.Name, mssql[element.type as keyof typeof mssql]);
                    });

                    paramValues[paramName].forEach((row: any) => {
                        const values: any = Object.values(row);
                        table.rows.add(...values);
                    });

                    request.input(paramName, table);
                } else {
                    paramType = mssql[params[i].Type as keyof typeof mssql];
                    paramValue = paramValues[paramName];
                    request.input(paramName, paramType, paramValue);
                }
            }

            // Use the query and parameter values to retrieve data from the database
            var rs
            if (type == "query") {
                rs = await request.query(query);
            } else {
                rs = await request.execute(query);
            }
            return rs.recordset;
        };
    }
}

// Export the generated functions
export { functions };