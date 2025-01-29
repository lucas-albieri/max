export function FirstRun() {

    const firstRunBanners = [
        'https://beam-images.warnermediacdn.com/2024-09/city_of_god_bpo.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com&w=640',
        'https://beam-images.warnermediacdn.com/2024-10/the_pinguin_bpo_post.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com&w=640',
        'https://beam-images.warnermediacdn.com/2024-10/twister_bpo.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com&w=640',
        'https://beam-images.warnermediacdn.com/2024-10/dune_prophecy_bpo.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com&w=640',
        'https://beam-images.warnermediacdn.com/2024-10/it_ends_with_us_bpo.jpg?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com&w=458',
        'https://beam-images.warnermediacdn.com/2024-08/garfield_bpo.png?host=wbd-dotcom-drupal-prd-us-east-1.s3.amazonaws.com&w=640'
    ]

    return (
        <div
            style={{
                backgroundColor: "#07071C",
            }}
            className="flex flex-col items-center justify-center gap-4 p-4 py-16"
        >
            <h3
                className="text-gray-100 text-3xl text-center lg:text-5xl font-bold"
            >
                Estreias que vão dar o que falar
            </h3>
            <div
                className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-8 mt6 lg:mt-12 w-full lg:w-3/5"
            >
                {firstRunBanners.map((banner, index) => (
                    <div
                        key={index}
                        className="relative"
                    >
                        <img
                            src={banner}
                            alt="First Run"
                            className="w-full h-full object-cover "
                        />
                    </div>
                ))}
            </div>
            <div
                style={{
                    backgroundColor: "#002be7",
                }}
                className="text-white  text-md font-bold px-8 py-3 rounded-md mt-4 cursor-pointer"
            >
                ASSINE AGORA
            </div>
        </div>
    )
}