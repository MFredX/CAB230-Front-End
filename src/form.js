import React,{ Component } from 'react';

class FormComp extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            newuser:
            { 
                email: "",
                password:"" 
            }   
        }
        this.handleFormSubmit=this.handleFormSubmit.bind(this);
        this.handleClearForm=this.handleClearForm.bind(this);
        this.handleEmail=this.handleEmail.bind(this)
        this.handlePassword=this.handlePassword.bind(this)
        
    }

    handleClearForm(e){
        e.preventDefault();
        this.setState({
            newUser:{
                email:'',
                password:'',

            },
        })

    }

    handleFormSubmit(e){
        e.preventDefault();
        let userData=this.state.newuser;
        const regButton = document.getElementById("regBtn");
       
        fetch("https://cab230.hackhouse.sh/register", {
            method: "POST",
            body: 'email=x.xxxx%40xxx.xxx.xx&password=xxxxxx',
            headers: {
            "Content-type": "application/x-www-form-urlencoded"
        },
        
        })
        .then(function(response) {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Network response was not ok");
          })
        .then(function(result) {
            let appDiv = document.getElementById("app");
            appDiv.innerHTML = JSON.stringify(result);
            regButton.disabled = true;
        })
        .catch(function(error) {
            console.log("There has been a problem with your fetch operation: ",error.message);
        });

    }

    handleEmail(e){
        let value=e.target.value;
        this.setState(prevState => ({ newuser :
            {...prevState.newuser,email:value
            }

        }))
    }

    handlePassword(e){
        let value=e.target.value;
        this.setState(prevState => ({ newuser :
            {...prevState.newuser,password:value
            }

        }), () => console.log(this.state.newUser))
    }

/*     handleInput(e){
        let value=e.target.value;
        let email=e.target.email;
        this.setState( prevState => {
            return{
                newUser:{
                    ...prevState.newUser,[email]:value
                }
            }
        }, () => console.log(this.state.newuser)
        )
    }
    xxxxxx */

    render(){
        return(
            <div>
                <form className="container" onSubmit={this.handleFormSubmit}>
                    <input
                        type={'text'}
                        title={'Email'}
                        value={this.state.newuser.email}
                        placeholder={'Enter your email'}
                        onChange={this.handleEmail}
                    /> {/* Email of the user */}
                    <input
                        type={'text'}
                        title={'Password'}
                        value={this.state.newuser.password}
                        placeholder={'Enter your Password'}
                        onChange={this.handlePassword}
                    /> {/* Password of the user */}
                    {/* <button onClick={() => this.handleFormSubmit()}>Login</button>Login */}
                    {/* <button onClick={() => this.handleClearForm()}>Clear But should be Rego</button>Register */}

                    <button handleFormSubmit={this.handleFormSubmit}>Login</button>{/* Login */}
                    <button handleClearForm= {this.handleClearForm}>Clear But should be Rego</button>{/* Register */}
                    {/* <GiphyButton onClick={this.handleClick()}/>
                    <GiphyButton handleClick={this.handleClick}/> */}

                </form>

            </div>
        );
    }
}
    

export default FormComp;