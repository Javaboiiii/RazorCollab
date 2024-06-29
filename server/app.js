import express, { static as static_ } from 'express';
import { createServer } from 'http';
import { join } from 'path';
import { Server } from 'socket.io';

const app    = express();
const server = createServer(app);
const io     = new Server(server);

app.use(static_('build'));
app.use((req, res, next) => {
    res.sendFile(join(__dirname, 'build', 'index.html'));
});

io.on('connection', (socket) => {
    console.log('socket connected', socket.id);
});

const PORT = process.env.IOPORT || 3434;
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));