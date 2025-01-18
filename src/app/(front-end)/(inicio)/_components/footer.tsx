export function Footer() {

    const footerButtons = [
        'Agora na Max',
        'Filmes',
        'Séries',
        'Episódios Grátis',
        'Esportes',
        'Crianças e Família',
        'Ajuda'
    ]

    const footerLinks = [
        'Política de Privacidade',
        'Modo infantil',
        'Termos de Uso',
        'Gerenciar Preferência de Cookies',
        'Comunicado para Imprensa',
    ]

    const footerSocialMedia = [
        {
            name: 'Facebook',
            url: 'https://www.facebook.com/',
            image: 'https://beam-images.warnermediacdn.com/2023-03/social_iconfacebook.png?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com'
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/',
            image: 'https://beam-images.warnermediacdn.com/2023-03/social_iconinstagram.png?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com'
        },
        {
            name: 'Youtube',
            url: 'https://www.youtube.com/',
            image: 'https://beam-images.warnermediacdn.com/2023-03/social_iconyoutube.png?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com'
        },
        {
            name: 'TikTok',
            url: 'https://www.tiktok.com/',
            image: 'https://beam-images.warnermediacdn.com/2023-03/social_icontiktok.png?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com'
        }
    ]

    return (
        <footer
            className="flex flex-col items-center justify-center py-6 text-white text-sm"
            style={{
                backgroundColor: "#07071C",
            }}
        >

            <div className="flex gap-10 items-center justify-center">
                {footerButtons.map((button, index) => (
                    <button key={index} className="text-white text-md font-bold uppercase ">{button}</button>
                ))}
            </div>

            <div className="flex gap-14 items-center justify-center mt-6">
                {footerLinks.map((link, index) => (
                    <button key={index} className="text-white text-sm ">{link}</button>
                ))}
            </div>

            <div className="flex flex-col items-center justify-center mt-6">
                <p className="text-white text-xs">
                    ©2025 WarnerMedia Direct Latin America, LLC. Todos os direitos reservados. Max é usado sob licença.
                </p>
            </div>

            <div className="flex gap-8 items-center justify-center mt-6">
                {footerSocialMedia.map((social, index) => (
                    <a key={index} href={social.url} target="_blank" rel="noreferrer" className="text-white">
                        <img src={social.image} alt={social.name} />
                    </a>
                ))}
            </div>
        </footer>
    )
}