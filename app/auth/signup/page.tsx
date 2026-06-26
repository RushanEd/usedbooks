import {emailSignup, facebookSignup} from "./action";

export default function Page() {
    return (
        <>
        <form action={emailSignup}>
            <input type="text" placeholder="Username" name="username" />
            <input type="email" placeholder="Email" name="email" />
            <input type="password" placeholder="***" name="password" />
            <button type="submit">Create account</button>
        </form>
        <form action={facebookSignup}>
            <button type="submit">Signup with Facebook</button>
        </form>
        </>
    );
}