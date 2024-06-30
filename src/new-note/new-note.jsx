import React, { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function NewNote() {
    const navigate = useNavigate();

    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('');
    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuidV4();
        setRoomId(id);
        toast.success('Created a new room');
    };

    const joinRoom = () => {
        if (!roomId || !username) {
            toast.error('ROOM ID & username is required');
            return;
        }

        // Redirect
        navigate(`/editor/${roomId}`, {
            state: {
                username,
            },
        });
    };

    const handleInputEnter = (e) => {
        if (e.code === 'Enter') {
            joinRoom();
        }
    };

    const styles = {
        pageWrapper: {
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#333',
        },
        formWrapper: {
            width: '400px',
            maxWidth: '90%',
            padding: '20px',
            backgroundColor: '#444',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        },

        mainLabel: {
            marginBottom: '20px',
        },
        idGroup: {
            display: 'flex',
            flexDirection: 'column',
            padding: '10px',
        },
        titleGroup: {
            display: 'flex',
            flexDirection: 'column',
            padding: '10px',
        },
        inputGroup: {
            padding: '7px',
            borderRadius: '5px',
            outline: 'none',
            border: 'none',
            backgroundColor: '#eee',
            fontWeight: 'bold',

        },
        buttonGroup: {
            padding: '10px',
            borderRadius: '5px',
            outline: 'none',
            border: 'none',
            backgroundColor: '#4aed88',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginLeft: '10px',
        },

    };

    return (
        <div style={styles.pageWrapper}>
            <div style={styles.formWrapper}>
                    <div>
                        <h1>Create a new note</h1>
                    </div>

                    <div style={styles.idGroup}>
                        <input type='text' id='id' name='id' placeholder='ID' style={styles.inputGroup} onChange={(e) => setRoomId(e.target.value)} value={roomId} onKeyUp={handleInputEnter} />
                    </div>
                    <div style={styles.titleGroup}>
                        <input type='text' id='username' name='username' placeholder='Username' style={styles.inputGroup} onChange={(e) => setUsername(e.target.value)} value={username} onKeyUp={handleInputEnter} />
                    </div>


                    <button type='submit' style={styles.buttonGroup} onClick={joinRoom}>Join</button>
                    <button type='submit' style={styles.buttonGroup} onClick={createNewRoom}>New ID</button>


            </div>
        </div>
    );



}
export default NewNote;