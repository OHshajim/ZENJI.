"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export function Newsletter() {
    const [email, setEmail] = useState('');
    const [done, setDone] = useState(false);
    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email.includes('@')) setDone(true)
    };
    return <section className="newsletter">
        <span className="kicker">STAY IN THE LOOP</span>
        {done ? <h2>YOU&apos;RE IN.<br />WATCH YOUR INBOX.</h2> : <><h2>NEW DROPS.<br /><em>NO NOISE.</em></h2>
            <form onSubmit={submit}>
                <label className="sr-only" htmlFor="email">Email address</label>
                <input id="email" type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="ENTER YOUR EMAIL" />
                <button>Join Zenji <ArrowUpRight size={17} /></button>
            </form></>}
    </section>
}