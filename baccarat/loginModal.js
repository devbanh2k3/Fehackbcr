function redirect(url) {
    let username = $(".username")

    console.log("username: ", username.length);

    // if (!username.length) {
    //     Swal.fire({
    //         type: "error",
    //         title: "Login required",
    //         text: "Please login to view the page",
    //         allowOutsideClick: false,
    //         confirmButtonText: 'Login',
    //     }).then((result) => {
    //         window.location.href = '/login';
    //     });
    // }
    // else {
    //     window.location.href = url;
    // }
    window.location.href = url;
}
