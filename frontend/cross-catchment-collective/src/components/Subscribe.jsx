function Subscribe() {
    const handleClick = () => {
    window.open("https://mailchi.mp/7a4867b16e58/cross-catchment-collective-mailing-list-subscription", "_blank");
  };

    return (
        <>
            <section className="mx-[8px]">
                <div className="mt-20">

                    <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">

                        <div className="flex flex-col md:flex-row items-center gap-6">

                            <div className="mx-auto">

                            <h3 className="text-2xl font-bold text-[#215D38]">
                            Stay Updated
                            </h3>

                            <p className="text-gray-600 mt-2">
                            Get the inside track. Subscribe for our latest updates and insights
                            </p>

                        </div>

                        <div className="flex justify-center">
                        <button
                        onClick={handleClick}
                        className="px-8 py-3 rounded-md bg-[#215D38] text-white hover:bg-[#18492c] transition">
                            Subscribe
                        </button>
                        </div>
                    </div>
                </div>
              </div>
            </section>
        </>
    )
}

export default Subscribe;