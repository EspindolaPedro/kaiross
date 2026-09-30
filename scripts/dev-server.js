import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=path.join(path.dirname(fileURLToPath(import.meta.url)),'..','public');
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.png':'image/png','.webp':'image/webp','.mp4':'video/mp4','.ico':'image/x-icon'};
const server=http.createServer((req,res)=>{const clean=decodeURIComponent(req.url.split('?')[0]);const file=path.join(root,clean==='/'?'index.html':clean);if(!file.startsWith(root)){res.writeHead(403);return res.end('Forbidden')}fs.readFile(file,(err,data)=>{if(err){res.writeHead(404,{'Content-Type':'text/plain'});return res.end('Not found')}res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream','Cache-Control':path.extname(file)==='.html'?'no-cache':'public, max-age=3600'});res.end(data)})});
const port=Number(process.env.PORT||3000);server.listen(port,'0.0.0.0',()=>console.log(`Escova LP listening on ${port}`));
