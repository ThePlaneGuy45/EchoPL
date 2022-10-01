import {util} from "../../Framework/util/util.js";

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

var plugin = new document(0);

export {plugin};
