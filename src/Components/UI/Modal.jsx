import ReactDom from 'react-dom'
import classes from './Modal.module.css'

const Backdrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.onCLickOutModal}></div>
    )
}

const ModalOverlay = (props) => {   
    return (
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    )
}

const portalElement = document.getElementById('overlays')

const Modal = (props) => {
    return(
        <>
            {ReactDom.createPortal(
                <Backdrop onCLickOutModal={props.onClickOutsideModal} />, 
                portalElement)
            }

            {ReactDom.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>, 
                portalElement)
            }
        </>
        
    )
}

export default Modal;