//method 1

var customerobj = new Object();
customerobj.customerId = "21323";
customerobj.Name = "Hello World";
console.log("Ultimate Object", ' ', customerobj);

//method 2
function Member(membershipNo, name, address) {
    this.membershipId = membershipNo;
    this.membershipName = name;
    this.address = address;
    Member.joiningfee = 2000;
    var membershipfee = 99999;
    this.getMemberName = function () {
        return this.membershipName;
    }
    this.getFee = function () {
        return membershipfee
    }
}

function GoldMem(id, name, addr, discount) {
    Member.call(this, id, name, addr); //super
    this.discountedRate = discount;
}

GoldMem.prototype = new Member(); //extends
var gobj = new GoldMem(7465, "Rock", "USA", 5);
console.log("super member", gobj.getMemberName());
console.log("super fee", gobj.getFee());
console.log("now disc rate", gobj.discountedRate);

Member.prototype.getAddress = function () {
    return this.address;
}

Member.prototype.getOFee = function () {
    return this.getFee();
}


var memberobj = new Member(2323234, "Subh", "Blore");
console.log("Function based Object", ' ', memberobj);
console.log("Only Address", memberobj.getAddress());
console.log("Only Name", memberobj.getMemberName());
console.log("Fee", memberobj.getFee());
console.log("OFee", memberobj.getOFee());
console.log("MemFee", Member.joiningfee);


//method 3
var accountCreated = new Date() + 6;
var accountObj = {
    accountNo: 4354546456565,
    type: "Savings",
    balance: 1000,
    doc: accountCreated,
    getBalance: function () {
        return this.balance + this.balance * 0.8;
    }
}
console.log("Account Object", ' ', accountObj);
console.log("SI Balance", '', accountObj.getBalance())

//method 4

class BankTransaction {
    constructor() {
        this.transactionId = 86876;
        this.amount = 4343;
        this.dot = new Date()
    }

    static get BranchCode()
    {
        return "BN1000";
    }

    set setTransactionId(value) {
        this.transaction = value + Math.random() * 1000;
    }

    get getTransactionID() {
        return this.transactionId;
    }
}

class PeakHrBankTx extends BankTransaction {
    constructor() {
        super();
        this.peakhour = "10am to 1pm"
    }
}

var pobj = new PeakHrBankTx();
pobj.setTransactionId = 7777;
console.log("Peak object Tx", pobj.getTransactionID);
console.log("Peak Object Peakhr", pobj.peakhour);
console.log("Branch Code", BankTransaction.BranchCode);

var transactionObj = new BankTransaction();
transactionObj.setTransactionId = 876;
console.log("Transaction Object", ' ', transactionObj);
console.log("Get Trx", transactionObj.getTransactionID)



