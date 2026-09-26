const SUPABASE_URL = "https://abahsqmirjlygvjnlvov.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiYWhzcW1pcmpseWd2am5sdm92Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAzOTM1NDYsImV4cCI6MjEwNTk2OTU0Nn0.fQR3gozL0cibB7-h5el6WGYdauS8gfK5fZirYtWMlWg";

const client = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

const form = document.getElementById("registrationForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const course = document.getElementById("course").value;

    const { error } = await client
        .from("registrations")
        .insert([
            {
                name,
                email,
                course
            }
        ]);

    const status = document.getElementById("status");

    if(error){
        status.textContent = error.message;
    } else {
        status.textContent = "Registration Successful";
        form.reset();
    }

});