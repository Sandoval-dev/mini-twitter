import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Dünyada Olup Bitenleri{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Keşfedin
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                MiniTwitter'a hoş geldiniz! Düşüncelerinizi paylaşın, insanlarla bağlantı kurun 
                ve anlamlı sohbetlere katılın. Sade, hızlı ve güvenli.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  href="/register" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-lg"
                >
                  Hemen Başla
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link 
                  href="/about" 
                  className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-200 transform hover:-translate-y-1 text-lg"
                >
                  Daha Fazla Bilgi
                </Link>
              </div>
            </div>

            {/* Right Content - Illustration */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
                <div className="space-y-4">
                  {/* Sample Tweet 1 */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                      <div>
                        <div className="font-semibold">Ahmet Yılmaz</div>
                        <div className="text-white/70 text-sm">@ahmety · 2s</div>
                      </div>
                    </div>
                    <p className="text-white/90">Bugün harika bir gün! 🎉 Yeni projemde büyük bir ilerleme kaydettim. #başarı #motivasyon</p>
                  </div>

                  {/* Sample Tweet 2 */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                      <div>
                        <div className="font-semibold">Ayşe Demir</div>
                        <div className="text-white/70 text-sm">@aysed · 1d</div>
                      </div>
                    </div>
                    <p className="text-white/90">İstanbul'da sabah manzarası nefes kesici! 🌅 #istanbul #günedoğuşu</p>
                  </div>

                  {/* Sample Tweet 3 */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                      <div>
                        <div className="font-semibold">Tech News</div>
                        <div className="text-white/70 text-sm">@technews · 3s</div>
                      </div>
                    </div>
                    <p className="text-white/90">Yapay zeka teknolojilerinde devrim niteliğinde gelişmeler! 🤖 #teknoloji #yapayzeka</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Neden <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">MiniTwitter</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern, hızlı ve kullanıcı dostu bir sosyal deneyim sunuyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Anlık Paylaşım</h3>
              <p className="text-gray-600">Düşüncelerinizi anında paylaşın, gerçek zamanlı etkileşim kurun.</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Topluluk</h3>
              <p className="text-gray-600">Benzer ilgi alanlarına sahip insanlarla bağlantı kurun.</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Güvenli</h3>
              <p className="text-gray-600">Gelişmiş güvenlik önlemleriyle verileriniz güvende.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Bize Katılmaya Hazır mısın?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Milyonlarca kullanıcının arasına katıl ve deneyimi kendin yaşa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/register" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-lg"
            >
              Ücretsiz Kayıt Ol
            </Link>
            <Link 
              href="/login" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 transform hover:-translate-y-1 text-lg"
            >
              Giriş Yap
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}