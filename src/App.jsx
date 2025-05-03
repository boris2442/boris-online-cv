
import './App.css';
//importation de l'image de profil
const profileImage = './pfofil.jpg';

function App() {


  return (
    <>
      <h1 className="text-3xl font-bold text-center text-blue-500 uppercase"  >Curriculum Vitae</h1>
      <div
        className="max-w-6xl mx-auto  bg-white rounded-3xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-3 fade-in">

        <aside className="bg-blue-700 text-white p-6 space-y-6">
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white">
              <img src={profileImage} alt="Photo de profil" className="object-cover w-full h-full transition-transform duration-300 transform hover:scale-110" />
            </div>
            <h1 className="text-2xl font-bold mt-4">Aubin Boris Simo</h1>
            <h2 className="text-sm text-blue-200">Développeur Web & Web Designer</h2>
          </div>

          <div>
            <h3 className="text-lg font-semibold border-b border-blue-300 pb-1">📞 Contact</h3>
            <ul className="mt-2 text-sm space-y-1">
              <li><a href="mailto:aubinborissimotsebo@gmail.com">Email :aubinborissimotsebo@gmail.com</a></li>
              <li><a href="https://wa.me/679135177">Téléphone : +237 679 135 177</a></li>
              <li>Téléphone : +237 694 223 503</li>
              <li> <a href="https://github.com/boris2442" target="_blank" rel="noopener noreferrer">GitHub:https://github.com/boris2442</a></li>
              <li>LinkedIn : linkedin.com/in/boris-simo</li>
              <li> <p className="text-sm mt-2">Ville : Bafoussam</p></li>
              <li> <p className="text-sm mt-2">Adresse : Bafoussam, Market B</p></li>

            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold border-b border-blue-300 pb-1">🌍 Langues</h3>
            <ul className="mt-2 text-sm">
              <li>Français : courant</li>
              <li>Anglais : intermédiaire</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold border-b border-blue-300 pb-1">🔧 Compétences diverses</h3>
            <ul className="mt-2 text-sm space-y-1">
              <li>   Développeur Web & Web Designer</li>
              <li>Électronique de base</li>
              <li>Design graphique</li>
              <li>Figma, Canva, Photoshop</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold border-b border-blue-300 pb-1">🔧 Informations Personelles</h3>
            <ul className="mt-2 text-sm space-y-1">
              <li>📅 Date de naissance : 13/01/2006</li>
              <li className="text-sm mt-2">💍 Statut : Célibataire</li>
              <li className="text-sm mt-2">⚽ Loisirs : Football, Musique, Lecture</li>
              <li className="text-sm mt-2">🌐 Centres d'intérêt : Technologie, Voyage, Sport</li>
              <li className="text-sm mt-2">🎯 Objectifs : Devenir Ingénieur logiciel</li>
              <li className="text-sm mt-2">🚀 Motivation : Passionné par le développement web et la création d'expériences utilisateur</li>
              <li className="text-sm mt-2">❤️ Passions : Technologie, Voyage, Sport</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold border-b border-blue-300 pb-1">🔧 Vie scolaire</h3>
            <ul className="mt-2 text-sm space-y-1">
              <li><em> <strong>BEPC:</strong> Lycee Bilingue de Bangou Mention A.B Session 2021</em>   </li>
              <li><em> <strong>Probatoire C:</strong> Lycee Bilingue de Bangou Mention Bien Session 2023</em></li>
              <li><em> <strong>BAccalaureat C:</strong> Lycee Bilingue de Bangou Mention A.B Session 2024</em></li>
              <li><em> <strong>DQP:</strong> Centre de Formation Professionnelle La Canadienne (Bafoussam-Cameroun) Session 2025 </em></li>
            </ul>
          </div>
        </aside>


        <main className="md:col-span-2 p-8 space-y-10">


          <section>
            <h2 className="text-2xl font-bold text-blue-600 mb-2">📝 Résumé Professionnel</h2>
            <p className="text-sm text-gray-700">
              Développeur passionné avec une forte expertise dans le développement web front-end. Actuellement en
              formation
              pour obtenir mon diplôme en Développement d'Applications, j'ai acquis des compétences solides dans
              la création de sites
              web interactifs , responsives , modernes et Professionnels. Mon objectif est de créer des expériences
              utilisateur innovantes et
              esthétiques à
              travers des technologies modernes comme JavaScript, HTML, CSS, PHP, Node.js, React, et Laravel.
            </p>
          </section>


          <section>
            <h2 className="text-2xl font-bold text-blue-600 mb-2">🎓 Formation</h2>
            <div>
              <p className="font-semibold text-lg">Développement d’Applications</p>
              <p className="text-sm text-gray-600">Université privée/école supérieure la canadienne – Cameroun | 2024 – En cours</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-blue-600 mb-2">💼 Projet Personnel</h2>
            <div>
              <p className="font-semibold text-lg">Site de décoration intérieure</p>
              <ul className="list-disc list-inside mt-2 text-gray-700 text-sm">
                <li>Durée : 3 mois</li>
                <li>React.js, Tailwind CSS, Laravel</li>
                <li>Responsive Design, animations CSS</li>
                <li>Mise en ligne via GitHub Pages</li>
                <li>Ajout d'effets de transition pour une expérience fluide</li>
              </ul>
            </div>
          </section>


          <section>
            <h2 className="text-2xl font-bold text-blue-600 mb-2">🛠️ Compétences Techniques</h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 list-disc list-inside text-sm text-gray-700">
              <li>HTML / CSS / JS</li>
              <li>Tailwind CSS</li>
              <li>Git & GitHub</li>
              <li>UI/UX Design</li>
              <li>Responsive Web Design</li>
              <li>Déploiement Web</li>
              <li>PHP</li>
              <li>Node.js</li>
              <li>React</li>
              <li>Laravel</li>
            </ul>
          </section>


          <section>
            <h2 className="text-2xl font-bold text-blue-600 mb-2">📊 Mes Compétences</h2>
            <div className="space-y-4">
              <div>
                <span className="text-sm">HTML / CSS</span>
                <div className="progress-bar bg-blue-500" style={{ width: '90%' }}></div>
              </div>
              <div>
                <span className="text-sm">JavaScript</span>
                <div className="progress-bar bg-yellow-500" style={{ width: '50%' }}></div>
              </div>
              <div>
                <span className="text-sm">PHP</span>
                <div className="progress-bar bg-green-500" style={{ width: '70%' }}></div>
              </div>
              <div>
                <span className="text-sm">Laravel</span>
                <div className="progress-bar bg-red-500" style={{ width: '48%' }}></div>
              </div>
              <div>
                <span className="text-sm">Intelligence Artificielle</span>
                <div className="progress-bar bg-blue-800" style={{ width: '38%' }}></div>
              </div>
              <div>
                <span className="text-sm">Node.js</span>
                <div className="progress-bar bg-indigo-500" style={{ width: '35%' }}></div>
              </div>
            </div>
          </section>


          <section>
            <h2 className="text-2xl font-bold text-blue-600 mb-2">👨‍💼 Références</h2>
            <p className="text-sm text-gray-700">Disponibles sur demande.</p>
          </section>


          <section>
            <h2 className="text-2xl font-bold text-blue-600 mb-2">🎯 Objectifs</h2>
            <p className="text-sm text-gray-700">
              Mon objectif est de devenir développeur Full Stack d'ici 2025. Je m'efforce de maîtriser des
              technologies côté serveur
              telles que Node.js, Express, PHP, Laravel afin d'offrir des solutions complètes aux utilisateurs.
            </p>
          </section>

        </main>
      </div>
    </>
  )
}

export default App
