import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
    function goUp() {
        document.documentElement.scrollTop = 0;
    }
    return (
        <>
            <div className="card-aboutMe">
                <div className="card-body-aboutMe">
                    <h1 className="card-title">About Me</h1>
                    <p className="card-text-aboutMe">
                        Jacks Haupt is a Mexican-American independent
                        singer-songwriter from Dallas, TX, born and raised in
                        Oak Cliff. Redefining the Alternative Pop-R&B/Soul
                        sound, she taught herself how to make music directly
                        from her iPhone at 17 years old. Jacks has now released
                        EPs such as 1973 and La Mezcla: Ilusion with the single
                        '3 AM' reaching over 400k streams on Spotify. Through
                        her magnificent talent, she also starred on the Disney
                        Plus documentary “Mija,” where it talks about her
                        struggle as a first generation latina artist and her
                        most desired dreams to become a star. Her magnifying
                        sound represents a whole generation that exists between
                        cultures, languages,and genres.
                    </p>
                    <p>
                        {" "}
                        Jacks Haupt es una cantante independiente
                        Mexicana-estadounidense de Dallas, TX, nacida y criada
                        en Oak Cliff. Al redefinir el sonido Pop-R&B/Soul
                        alternativo, a los 17 años aprendió por sí misma cómo
                        hacer música directamente desde su iPhone. Jacks ahora
                        ha lanzado EP como La Mezcla: Ilusion y 1973 con el
                        sencillo '3 AM' alcanzando más de 400k transmisiones en
                        Spotify. A través de su magnífico talento, también
                        protagonizó el documental de Disney Plus “Mija”, donde
                        habla sobre su lucha como artista latina de primera
                        generación y sus sueños más anhelados para convertirse
                        en una estrella. Su sonido magnificante representa a
                        toda una generación que existe entre culturas, lenguas y
                        géneros.
                    </p>
                    <button onClick={goUp} className="btn btn-primary-up">
                        Top of the Page
                    </button>
                </div>
            </div>
        </>
    );
};

export default AboutMe;
