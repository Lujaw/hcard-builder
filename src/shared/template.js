const serialize = require("serialize-javascript");
export default (body, data) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script>window.__HCARD_STATE__ = ${serialize(data)}</script>
        <title>Live hCard Preview</title>
        <link href="/static/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/static/css/react-bootstrap-table.min.css" rel="stylesheet" />
        <link href="/static/css/main.css" rel="stylesheet" />
      </head>
      
      <body>
        <div id="root">${body}</div>
      </body>
      
      <script src="/static/bundle.js"></script>
    </html>
  `;
};
