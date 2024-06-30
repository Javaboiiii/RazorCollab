import React, { useState, useRef, useEffect } from 'react';
import Avatar from 'react-avatar';
import toast from 'react-hot-toast';
import ACTIONS from '../Actions';
import Editor from '../components/Editor/Editor';
import { initSocket } from '../socket';
import {
    useLocation,
    useNavigate,
    Navigate,
    useParams,
} from 'react-router-dom';

function EditorPage() {
    const socketRef = useRef(null);
    const codeRef = useRef(null);
    const location = useLocation();
    const { roomId } = useParams();
    const reactNavigator = useNavigate();
    const [clients, setClients] = useState([]);

    useEffect(() => {
        const init = async () => {
            socketRef.current = await initSocket();
            socketRef.current.on('connect_error', (err) => handleErrors(err));
            socketRef.current.on('connect_failed', (err) => handleErrors(err));

            function handleErrors(e) {
                console.log('socket error', e);
                toast.error('Socket connection failed, try again later.');
                reactNavigator('/');
            }

            // In future we can user proper auth method
            const current_username = location.state?.username || "Guest" + Math.random().toString(36).substring(2, 12);

            socketRef.current.emit(ACTIONS.JOIN, {
                roomId,
                username: current_username,
            });

            // Listening for joined event
            socketRef.current.on(
                ACTIONS.JOINED,
                ({ clients, username, socketId }) => {
                    if (username !== current_username) {
                        toast.success(`${username} joined the room.`);
                        console.log(`${username} joined`);
                    }
                    setClients(clients);
                    socketRef.current.emit(ACTIONS.SYNC_CODE, {
                        code: codeRef.current,
                        socketId,
                    });
                }
            );

            // Listening for disconnected
            socketRef.current.on(
                ACTIONS.DISCONNECTED,
                ({ socketId, username }) => {
                    toast.success(`${username} left the room.`);
                    setClients((prev) => {
                        return prev.filter(
                            (client) => client.socketId !== socketId
                        );
                    });
                }
            );
        };
        init();
        return () => {
            socketRef.current.disconnect();
            socketRef.current.off(ACTIONS.JOINED);
            socketRef.current.off(ACTIONS.DISCONNECTED);
        };
    }, []);

    async function copyRoomId() {
        try {
            await navigator.clipboard.writeText(roomId);
            toast.success('Room ID has been copied to your clipboard');
        } catch (err) {
            toast.error('Could not copy the Room ID');
            console.error(err);
        }
    }

    function leaveRoom() {
        reactNavigator('/');
    }

    const styles = {
        mainWrap: {
            display: 'flex',
            height: '100vh',
        },
        aside: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
            backgroundColor: '#f0f0f0',
            width: '250px',
        },
        asideinner: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            logo: {
                marginBottom: '20px',
            },
            clientlist: {
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            },
            client: {
                display: 'flex',
                alignItems: 'center',
                marginBottom: '10px',
            },
            buttonGroup: {
                outline: 'none',
                border: 'none',
                backgroundColor: '#4aed88',
                fontWeight: 'bold',
                cursor: 'pointer',
                marginLeft: '10px',
                marginTop: '10px',

            },
            editor: {
                flex: 1,
                padding: '20px',
            },
        }
    };
    return (
        <div style={styles.mainWrap}>
            <div style={styles.aside}>
                <div style={styles.asideinner}>
                    <div>
                        <h1 style={styles.logo}>RazorCollab</h1>
                    </div>
                    <h3>Online People</h3>
                    <div style={styles.clientlist}>
                        {clients.map((client) => {

                            return <div key={client.socketId} style={styles.client}>
                                <Avatar name={client.username} size="30" round={true} />
                                <span>{client.username}</span>
                            </div>
                        })}

                    </div>

                </div>
                <button style={styles.buttonGroup} onClick={copyRoomId}>Copy Room ID</button>
                <button style={styles.buttonGroup} onClick={leaveRoom}>Leave</button>
                <button style={styles.buttonGroup}>New Note</button>

            </div>
            <script src=""></script>
            <div style={styles.editor}>
                <Editor
                    socketRef={socketRef}
                    roomId={roomId}
                    onCodeChange={(code) => {
                        codeRef.current = code;
                        document.getElementById('preview').innerHTML = code2markdown.convert(code);
                    }}
                />
            </div>
            <div id="preview" class="c2m"></div>
        </div>
    );

};
export default EditorPage;