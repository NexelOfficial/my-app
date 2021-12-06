import './groups.css'

const InfoSection = () => {
    return (
        <div className="container max-w-lg">
            <h2>Klaar met die guppen?</h2>
            <p>Wij ook! Gelukkig is er nu een oplossing. Verbrand al je guppen voor niks! Onze service werkt in simpele stappen. Maak een gratis account aan, stuur je guppen op en spaar 'guppies'. Bij elke 100 guppies kunt u een cadeau naar keuze uitzoeken! Start nu!</p>
        </div>
    )
}

const LoginScreen = () => {
    return (
        <div className="container max-w-sm">
            <h2 className="text-center text-white">Terminale Guppen Login</h2>
            <form>
                <label htmlFor="login-username">Naam</label>
                <input type="text" id="login-username" placeholder="bv. guppen_hater" />
                <label htmlFor="login-password">Wachtwoord</label>
                <input type="password" id="login-password" placeholder="bv. ik_haat_guppen" />
                <button className="button mt-3">Inloggen</button>
            </form>
        </div>
    );
}

const App = () => {
    return (
        <div className="flex flex-wrap h-screen bg-gray-800 p-5">
            <LoginScreen />
        </div>
    );
}

export default App;