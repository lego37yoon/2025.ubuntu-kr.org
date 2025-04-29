import { committeeMembers } from "@data/committeeMembers";
import * as m from "../paraglide/messages.js";
import { useState, type FormEvent } from "react";

export default function CommitteeMembers() {
    const [memberList, setMemberList] = useState(committeeMembers);

    function searchMember(keyword: string) {
        setMemberList(committeeMembers.filter((member) =>
            member.name.includes(keyword) ||
            member.role.join().includes(keyword)
        ));
    }

    function resetMember() {
        setMemberList(committeeMembers);
    }

    return (
        <section className="grid-col-8">
        <form className="p-search-box u-no-print" onSubmit={(e) => {e.preventDefault()}}>
            <label className="u-off-screen" htmlFor="search">{m.role_search()}</label>
            <input type="search" id="search" className="p-search-box__input" name="search" placeholder={m.role_search()} autoComplete="on" onChange={(e) => searchMember(e.currentTarget.value)} />
            <button type="reset" className="p-search-box__reset" onClick={resetMember}><i className="p-icon--close">{m.role_close()}</i></button>
            <button type="submit" className="p-search-box__button"><i className="p-icon--search">{m.role_search()}</i></button>
        </form>

        <ul className="row">
            {memberList.map((member, idx) => (
                <li className="col-4 col-medium-3" key={idx}>
                    <div className="p-media-object--large">
                        <img
                            src={member.profileImageUrl}
                            className="p-media-object__image is-round"
                            alt={member.name}
                        />
                        <div className="p-media-object__details">
                            <h4 className="u-no-padding--top" style={{ marginBottom: "0.1rem" }}>{member.name}</h4>
                            <p className="p-media-object__content">
                                {member.team}
                            </p>
                            <p className="p-media-object__content">
                                {member.role.map((role, idx) => (
                                    <span className={`u-no-margin--bottom ${idx === 0 ? "p-chip--information" : "p-chip"}`} key={idx}>
                                        {role}
                                    </span>
                                ))}
                            </p>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
        </section>
    )
}