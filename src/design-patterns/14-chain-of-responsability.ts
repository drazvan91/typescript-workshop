class HttpResponse {
    constructor(public content: string){}
}

class HttpRequest {
    constructor(public url: string, public authorizationHeader: string){}
}

interface HttpMiddleware {
    nextMiddleware: HttpMiddleware;
    handle(request: HttpRequest): HttpResponse;
}

class NotFoundMiddleware implements HttpMiddleware {
    nextMiddleware: HttpMiddleware;

    handle(request: HttpRequest): HttpResponse {
        if(this.nextMiddleware == null) return new HttpResponse("404: Not found");
        
        let response = this.nextMiddleware.handle(request);
        if(response == null || response.content == null) return new HttpResponse("404: Not found");

        return response;
    }
}

class ExceptionMiddleware implements HttpMiddleware {
    nextMiddleware: HttpMiddleware;

    handle(request: HttpRequest): HttpResponse {
        try {
            return this.nextMiddleware.handle(request);
        } catch(e){
            return new HttpResponse(e.message);
        }
    }
}

class AuthorizationMiddleware implements HttpMiddleware {
    nextMiddleware: HttpMiddleware;

    handle(request: HttpRequest): HttpResponse {
        if(request.authorizationHeader != "Basic 1234"){
            throw new Error("Access denied");
        }

        return this.nextMiddleware.handle(request);
    }   
}

class MvcMiddleware implements HttpMiddleware {
    nextMiddleware: HttpMiddleware;

    handle(request: HttpRequest): HttpResponse {
        if(request.url == "/home/index")
            return new HttpResponse("this is the index page");
        else if(request.url == "/home/account")
            return new HttpResponse("this is the account page");
        
        return this.nextMiddleware.handle(request);
    } 
}

class DeadEndMiddleware implements HttpMiddleware {
    nextMiddleware: HttpMiddleware;
    
    handle(request: HttpRequest): HttpResponse {
        return null;
    }    
}


class HttpPipeline {
    private middlewares = new Array<HttpMiddleware>();

    addMiddleware(middleware: HttpMiddleware): void {
        this.middlewares.push(middleware);
        if(this.middlewares.length > 1){
            this.middlewares[this.middlewares.length - 2].nextMiddleware = middleware;
        }
    }

    handleRequest(request: HttpRequest): string {
        var response = this.middlewares[0].handle(request);
        return response.content;
    }
}

let pipeline = new HttpPipeline();
pipeline.addMiddleware(new NotFoundMiddleware());
pipeline.addMiddleware(new ExceptionMiddleware());
pipeline.addMiddleware(new AuthorizationMiddleware());
pipeline.addMiddleware(new MvcMiddleware());
pipeline.addMiddleware(new DeadEndMiddleware());

console.log(pipeline.handleRequest(new HttpRequest("/home/index", "")));
console.log(pipeline.handleRequest(new HttpRequest("/home/index", "Basic 1234")));
console.log(pipeline.handleRequest(new HttpRequest("/home/account", "Basic 1234")));
console.log(pipeline.handleRequest(new HttpRequest("/home/no page", "Basic 1234")));
