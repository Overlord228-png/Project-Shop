export default function InputEmailReg(props) {
    return (
        <div>
            <input
                className=""
                type="email"
                placeholder="email"
                value={props.email}
                onChange={(event) =>props.setEmail(event.target.value)}
            />
        </div>
    )
}
