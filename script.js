document.addEventListener('DOMContentLoaded', () => {
            document.body.innerHTML = "";
            document.title = 'SEM ANISTIA';
            const style = document.createElement('style');
            style.textContent = `
                body {
                    background-image: "background.gif";
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-attachment: fixed;
                    color: #e0e0e0;
                    font-family: 'Segoe UI', Arial, sans-serif;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    text-align: center;
                }

                .container {
                    border: 3px solid #ff0000;
                    box-shadow: 0 0 30px rgba(255, 0, 0, 0.5);
                    padding: 50px;
                    max-width: 900px;
                    width: 90%;
                    border-radius: 8px;
                    backdrop-filter: blur(5px);
                    animation: pulse-border 2s infinite alternate;
                }

                @keyframes pulse-border {
                    from {
                        border-color: #ff0000;
                        box-shadow: 0 0 30px rgba(255, 0, 0, 0.5);
                    }

                    to {
                        border-color: #990000;
                        box-shadow: 0 0 15px rgba(153, 0, 0, 0.8);
                    }
                }

                .alert-header {
                    font-size: 2.5em;
                    color: #ff0000;
                    text-transform: uppercase;
                    font-weight: 700;
                    margin-bottom: 20px;
                    letter-spacing: 1px;
                    border-bottom: 1px solid #ff0000;
                    padding-bottom: 15px;
                }

                .alert-message {
                    font-size: 1.2em;
                    line-height: 1.6;
                    margin-bottom: 25px;
                    font-weight: 400;
                }

                .contact {
                    margin-top: 20px;
                    font-size: 0.9em;
                    color: #777;
                }

                .contact a {
                    text-decoration: none;
                    color: white;
                }


                @media (max-width: 768px) {
                    .container {
                        padding: 20px;
                        width: 95%;
                    }

                    .alert-header {
                        font-size: 1.8em;
                    }

                    .alert-message {
                        font-size: 1em;
                    }
                }
            `;
            document.head.appendChild(style);


            // --- CRIAÇÃO DO HTML (DOM) ---

            const container = document.createElement('div');
            container.classList.add('container');

            const header = document.createElement('div');
            header.classList.add('alert-header');
            header.textContent = 'SEM ANISTIA!';
            container.appendChild(header);

            const messageDiv = document.createElement('div');
            messageDiv.classList.add('alert-message');

            const p1 = document.createElement('p');
            p1.textContent = 'Acreditamos que a cena desta semana com bolsonaristas pedindo anistia, para aqueles que tentaram demolir nossa democracia, foi um enorme insulto. Eles querem apagar o que vimos e sentimos. Mas nossa memória não é algo que se apaga com um clique; é um arquivo vivo que todos carregamos.';
            messageDiv.appendChild(p1);

            const p2 = document.createElement('p');
            p2.textContent = 'O que eles pedem é um perdão para a violência, o caos e o ódio que tentaram impor. Eles se pintam como heróis de uma história de ficção, mas a verdade é que eles são o problema que a gente precisa resolver. A narrativa que eles contam é que estamos em uma ditadura, mas quem faz homenagem a ditador são eles.';
            messageDiv.appendChild(p2);

            const p3 = document.createElement('p');
            p3.textContent = 'A chama foi acesa, e quando a hora da verdade chegar, e ela vai chegar, vocês pagarão por cada mentira, por cada agressão, por cada manipulação. Este não é um recado apenas ao Pastor Jefferson Campos. É um aviso para todos aqueles que pedem anistia para golpistas!';
            messageDiv.appendChild(p3);

            container.appendChild(messageDiv);

            const contactDiv = document.createElement('div');
            contactDiv.classList.add('contact');
            contactDiv.textContent = 'Nós somos a ';

            const contactLink = document.createElement('a');
            contactLink.href = 'https://bsky.app/profile/chamaantifa.org';
            contactLink.textContent = 'C.H.A.M.A. ANTIFA';
            contactDiv.appendChild(contactLink);
            container.appendChild(contactDiv);

            document.body.appendChild(container);
        });