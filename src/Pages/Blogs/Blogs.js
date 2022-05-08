import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-5 border border-info text-center'>
            <h1><u>Ques & Ans</u></h1>
            <h3>Difference between javascript and nodejs</h3>
            <p>Javascript is a programming language, and nodejs provides a runtime environment for javascript.
            Javascript can be executed in the browser's console. Nodejs, on the other hand, allows us to run javascript outside of the browser.
            Javascript is utilized mostly on the client side, whereas nodejs is used on the server side.</p>
            <h3>When should you use nodejs and when should you use mongodb</h3>
            <p>Node.js is ideal for server-side applications. Nodejs is being used for applications that require a permanent connection from the browser back to the server, such as chat programs or inventory management. If one is simply creating an application that does not require user/server interactions, working with alternative frameworks will suffice and take significantly less time.<br></br>
            MongoDB is a NoSQL database that is object-oriented, simple, dynamic, and scalable. It employs the NoSQL document storage concept. Instead of storing the data in the columns and rows of a standard relational database, the data objects are saved as individual documents inside a collection. MongoDB is document-oriented, has high performance, can scale to enormous sizes, and is also versatile. As a result, we should utilize MongoDB while developing E-commerce apps, content management apps, real-time analytics, and high-speed logging, among other things, because these applications require a high-performance and versatile database.
            </p>
            <h3>Differences between sql and nosql databases.</h3>
            <p>SQL databases are relational, but NoSQL databases are not.
            SQL databases employ structured query language and have a preset schema, whereas NoSQL databases employ dynamic schemas for unstructured data. SQL databases scale vertically, while NoSQL databases scale horizontally.</p>
            <h3>What is the purpose of jwt and how does it work</h3>
            <p>JSON Web Token (JWT) is an open standard (RFC 7519) that offers a compact and self-contained method for securely communicating information as a JSON object between parties. It's an established standard for exchanging security information between two sides - a client and a server.<br></br>
            The JWT token is used to identify the person who is attempting to access the database. When a user requests access to a protected route or resource, the user agent should transmit the JWT, often in the Authorization header and using the Bearer schema. The server's protected routes will verify the Authorization header for a valid JWT, and if one is found, the user will be granted access to protected resources otherwise not.</p>
        </div>
    );
};

export default Blogs;