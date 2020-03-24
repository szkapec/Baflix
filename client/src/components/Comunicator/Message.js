import React from 'react';

const Message = (props) => {
    
        return(
            <>
                {props.username[0]?(<tr>
                <td>{props.username[0]&&props.username[0]}</td>
                <td>{props.username[0]&&props.description[0]}</td>
                    </tr>):(
                        <tr>
                            <td>Brak wiadomości</td>
                            <td>Proszę dodać nową;)</td>
                        </tr>
                    )}
                    
                {props.username[1]&&(<tr>
                    <td>{props.username[1]&&props.username[1]}</td>
                    <td>{props.username[1]&&props.description[1]}</td>
                </tr>)}
                {props.username[2]&&(<tr>
                    <td>{props.username[2]&&props.username[2]}</td>
                    <td>{props.username[2]&&props.description[2]}</td>
                </tr>)}
                {props.username[3]&&(<tr>
                    <td>{props.username[3]&&props.username[3]}</td>
                    <td>{props.username[3]&&props.description[3]}</td>
                </tr>)}
                {props.username[4]&&(<tr>
                    <td>{props.username[4]&&props.username[4]}</td>
                    <td>{props.username[4]&&props.description[4]}</td>
                </tr>)}
                {props.username[5]&&(<tr>
                    <td>{props.username[5]&&props.username[5]}</td>
                    <td>{props.username[5]&&props.description[5]}</td>
                </tr>)}
                {props.username[6]&&(<tr>
                    <td>{props.username[6]&&props.username[6]}</td>
                    <td>{props.username[6]&&props.description[6]}</td>
                </tr>)}
                {props.username[7]&&(<tr>
                    <td>{props.username[7]&&props.username[7]}</td>
                    <td>{props.username[7]&&props.description[7]}</td>
                </tr>)}
                {props.username[8]&&(<tr>
                    <td>{props.username[8]&&props.username[8]}</td>
                    <td>{props.username[8]&&props.description[8]}</td>
                </tr>)}
                {props.username[9]&&(<tr>
                    <td>{props.username[9]&&props.username[9]}</td>
                    <td>{props.username[9]&&props.description[9]}</td>
                </tr>)}

                {props.username[10]&&(<tr>
                    <td>{props.username[10]&&props.username[10]}</td>
                    <td>{props.username[10]&&props.description[10]}</td>
                </tr>)}
                {props.username[11]&&(<tr>
                    <td>{props.username[11]&&props.username[11]}</td>
                    <td>{props.username[11]&&props.description[11]}</td>
                </tr>)}
                {props.username[12]&&(<tr>
                    <td>{props.username[12]&&props.username[12]}</td>
                    <td>{props.username[12]&&props.description[12]}</td>
                </tr>)}
                {props.username[13]&&(<tr>
                    <td>{props.username[13]&&props.username[13]}</td>
                    <td>{props.username[13]&&props.description[14]}</td>
                </tr>)}
                {props.username[14]&&(<tr>
                    <td>{props.username[14]&&props.username[14]}</td>
                    <td>{props.username[14]&&props.description[14]}</td>
                </tr>)}
    
            </>
        )
    }
   


export default Message;