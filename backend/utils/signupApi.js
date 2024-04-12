const call_signup_api = async () => {

        console.log("working");
      
        const e = document.getElementById('rform');
      
        e.preventDefault();
      
        const name = e.name.value;
        const gender = e.gender.value;
        const username = e.username.value;
        const password = e.password.value;
        const confirmPassword = e.confirmPassword.value;
      
        console.log(name, gender, username, password, confirmPassword);
      
        const url = "http://localhost:5000/auth/signup";
      
        const option = {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, gender, username, password, confirmPassword })
        };
      
        const response = await fetch(url, option);
      
        if (!response) {  // Check for unsuccessful response
          console.log("signup fail");
        } else {
          const data = await response.json();
          console.log(data);
        }
      }      
