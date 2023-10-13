import React, { useState } from "react";


const Modal = ({ setIsOpen, mailobj, setMailObject, submit }) => {


    return (
        <>
            <div onClick={() => setIsOpen(false)} />
            <div style={{ backgroundColor: 'lightgrey', display: 'flex', justifyContent: 'center', alignItems: 'center', }} className={styles.centered}>
                <div style={{ width: "80%", padding: "20px" }} className={styles.modal}>
                    <div style={styles.inputContainer}>
                        <div style={styles.label}>Subject</div>
                        <input value={mailobj.subject}
                            onChange={(e) => setMailObject((prevState) => ({
                                ...prevState, subject: e.target.value
                            }))}
                            style={styles.input} type="text" />
                    </div>
                    <div style={styles.inputContainer}>
                        <div style={styles.label}>email </div>
                        <textarea
                            onChange={(e) => setMailObject((prevState) => ({
                                ...prevState, msg: e.target.value
                            }))}
                            value={mailobj.msg} style={{ width: '100%', border: 'none', borderRadius: '5px', padding: "5px" }} rows={14}
                            cols={40} />
                    </div>

                    <div style={styles.inputContainer}>
                        <div style={styles.label}>Attachments </div>
                        <input type="file" />
                    </div>


                    {/* <div style={{ width: '85%', float: 'left', display: 'flex' }}>
                        <input type="file" />
                    </div> */}

                    <div className={styles.modalActions} style={{ float: 'right', display: "flex" }}>
                        <div className={styles.actionsContainer} style={{ display: "flex", gapX: '20px' }}>

                            <button style={styles.button} onClick={() => setIsOpen(false)}>
                                Cancel
                            </button>
                            <button style={{
                                border: 'none', marginLeft: '10px',
                                borderRadius: '20px', paddingTop: '10px', paddingBottom: '10px', paddingRight: '20px', paddingLeft: '20px', backgroundColor: "green",
                                width: '100px', float: 'right', color: 'white', fontWeight: 'bold', textTransform: 'uppercase', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center', justifyItems: 'center'
                            }} onClick={() => submit()}>
                                SEND
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const styles = {
    inputContainer: { display: "flex", flexDirection: 'column', marginTop: "10px", marginBottom: "10px" },
    label: { fontSize: '20px', fontWeight: 'bold', textTransform: 'uppercase', color: 'GrayText' },
    input: { height: '60px', border: 'none', borderRadius: '5px' },
    button: {
        border: 'none',
        borderRadius: '20px', paddingTop: '10px', paddingBottom: '10px', paddingRight: '20px', paddingLeft: '20px', backgroundColor: "lightpink",
        width: '100px', float: 'right', color: 'white', fontWeight: 'bold', textTransform: 'uppercase', display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center', justifyItems: 'center'
    }
}
export default Modal;