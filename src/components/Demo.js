
const DemoPage =() =>{
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(e.target.username.value);
        console.log(e.target.age.value);
    }

    return (
        <div>
            <h1>Demo Form</h1>

            <form onSubmit={onSubmitHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" />
                <label htmlFor="age">Age</label>
                <input type="number" id="age" name="age" />
                <input type="submit" value="Send" />
            </form>
        </div>
    );
};

export default DemoPage;