function navigateTo(target) {
    if(target === "home"){
        window.location.href = "https://andrewnationdev.github.io/biversetheory/";
        return;
    }

    if(target === 'games'){
        window.location.href = "https://andrewnationdev.vercel.app/games";
        return;
    }

    window.location.href = `https://andrewnationdev.github.io/biversetheory/${target}.html`;
}