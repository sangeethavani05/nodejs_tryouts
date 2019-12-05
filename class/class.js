class Reports{
    constructor(type,response){
        this.type = type;
        this.response = response;
        this.sendResponse('hi');
        this.sendResponse('hi',2);
    }
    sendResponse(x){
        const result = {
            message: x,
            reportName: this.type,
            data: this.response
        };
        console.log(result);
        return result;
    }
    sendResponse(x,y){
        const result = {
            message1: x,
            message2: y,
            reportName: this.type,
            data: this.response
        };
        console.log(result);
        return result;
    }

}

Reports.prototype.getInput = () => {

}

class NonReporting extends Reports{
    constructor(){
        super('Non Reporting','{count: 234}' );
        // this.sendResponse();
    }
}

const reportObj = new NonReporting();
// reportObj.sendResponse();

