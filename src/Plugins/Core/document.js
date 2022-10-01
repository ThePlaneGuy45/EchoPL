import {util} from "../../Framework/util";

class document {
    constructer(document) {
        this.document = document;
    }

    getInfo() {
        return {
            id: "document",
            functions: {
                "test": test()
            }
        };
    }

    test(foo) {
        return(foo);
    }
};

plugin = new document(0);

export {plugin};
