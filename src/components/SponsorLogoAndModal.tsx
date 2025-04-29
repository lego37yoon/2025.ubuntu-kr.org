
import { useState, type MouseEvent } from "react";
import { m } from "../paraglide/messages.js";
type SponsorLogoAndModalProps = {
    name: string,
    level: string,
    logoImageSrc: string,
    description: string,
    url: string,
    showPopup: Boolean
}
export default function SponsorLogoAndModal(props: SponsorLogoAndModalProps) {
    const [modalOpen, setModalOpen] = useState(false);
    const closeHandler = (e: KeyboardEvent|MouseEvent<HTMLButtonElement>) => {
        if (e.type === "click" || (e as KeyboardEvent).key === "Escape") {
            setModalOpen(false);
            document.removeEventListener("keydown", closeKeyListener);
        }
    };
    const closeKeyListener = (e: KeyboardEvent) => closeHandler(e);

    return (
        <>
            <button className="p-button--base" onClick={() => {
                    if(props.showPopup) { 
                        setModalOpen(true); 
                        document.addEventListener("keydown", closeKeyListener);
                    }
                }} aria-controls="modal">
                <img src={props.logoImageSrc} alt={props.name} loading="lazy"/>
            </button>
           
            <div className="p-modal" id="modal" style={{display: modalOpen && props.showPopup ? "flex" : "none"}}>
            <section className="p-modal__dialog" role="dialog" aria-modal={modalOpen && props.showPopup ? "true":"false"} aria-labelledby="modal-title" aria-describedby="modal-description">
                <header className="p-modal__header">
                    <h2 className="p-modal__title" id="modal-title">{m.sponsor_about()}</h2>
                    <button className="p-modal__close" aria-label="Close active modal" aria-controls="modal" onClick={closeHandler}>Close</button>
                </header>
                <img src={props.logoImageSrc} alt={props.name} />
                <h1>{props.name}</h1>
                <b>{props.level}</b>
                <p>
                    {props.description}
                </p>
                <footer className="p-modal__footer">
                <a href={props.url}><button className="p-button--positive u-no-margin--bottom">{m.visit_website()}</button></a>
                </footer>
            </section>
            </div>
        </>
    )
}