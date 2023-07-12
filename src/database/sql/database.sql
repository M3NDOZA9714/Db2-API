create table semillas.Module (
	Id int identity(1,1) primary key,
	[Name] varchar(50),
	[Route] varchar(150),
	CreatedAt datetime
)

create table semillas.[Profile] (
	Id int identity(1,1) primary key,
	[Name] varchar(50),
	CreatedAt datetime
)

create table semillas.[Permission] (
	Id int identity(1,1) primary key,
	idModule int,
	idProfile int,
	foreign key (IdModule) references semillas.Module(Id),
	foreign key (IdProfile) references semillas.[Profile](Id)
)

create table semillas.[User] (
	Id int identity(1,1) primary key,
	UserName varchar(100),
	UserPass varchar(500),
	NickName varchar(50),
	IdProfile int,
	CreatedAt datetime,
	foreign key (IdProfile) references semillas.[Profile](Id)
)

GO

create table semillas.Product (
	Id int identity(1,1) primary key,
	Code varchar(50),
	[Name] varchar(100),
	[Description] varchar(500),
	ForSale int,
	CreatedAt datetime,
	CreatedBy int,
	UpdatedAt datetime,
	UpdatedBy int
	foreign key (CreatedBy) references semillas.[User](Id),
	foreign key (UpdatedBy) references semillas.[User](Id)
)

alter table semillas.Product add constraint UK_Product_Name unique ([Name])

create table semillas.Property (
	Id int identity(1,1) primary key,
	[Name] varchar(100),
	CreatedAt datetime
	IdUser int,
	UpdatedAt datetime,
	[Disabled] int
	foreign key (IdUser) references semillas.[User](Id)
)

alter table semillas.Property add constraint UK_Property_Name  unique ([Name])

create table semillas.PropertyByProduct (
	Id int identity(1,1) primary key,
	IdProduct int,
	IdProperty int,
	foreign key (IdProduct) references semillas.Product(Id),
	foreign key (IdProperty) references semillas.Property(Id)
)

GO

create table semillas.[Entry] (
	Id int identity(1,1) primary key,
	Reference varchar(50),
	IdUser int,
	CreatedAt datetime,
	foreign key (IdUser) references semillas.[User](Id)
)

create table semillas.EntryDetail (
	Id int identity(1,1) primary key,
	IdEntry int,
	IdProduct int,
	SendToSale int,
	Quantity float,
	PurchasePrice float,
	SalePrice float,
	foreign key (idProduct) references semillas.Product(Id),
	foreign key (idEntry) references semillas.[Entry](Id)
)

create table semillas.ValueOfProperty (
	Id int identity(1,1) primary key,
	IdPropertyByProduct int,
	[Value] varchar(100),
	foreign key (IdPropertyByProduct) references semillas.PropertyByProduct(Id)
)

GO

create table semillas.Session (
	Id int primary key,
	[Key] varchar(max),
	CreatedAt datetime,
	ExpirateAt datetime
)

GO