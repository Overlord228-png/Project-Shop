export default function InputNameReg(props) {
    return (
        <div>
            <input 
                className="" 
                type="name" 
                placeholder="Name"
                value={props.name} 
                onChange={(event) =>props.setName(event.target.value)}
            />
        </div>
    )
}
