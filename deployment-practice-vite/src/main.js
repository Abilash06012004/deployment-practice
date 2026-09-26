import './style.css';
import { supabase } from './supabase.js';

const form = document.getElementById('registrationForm');

if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const course = document.getElementById('course').value;

        const { error } = await supabase
            .from('registrations')
            .insert([
                {
                    name,
                    email,
                    course
                }
            ]);

        const status = document.getElementById('status');

        if (error) {
            status.textContent = error.message;
        } else {
            status.textContent = 'Registration Successful';
            form.reset();
        }
    });
}
