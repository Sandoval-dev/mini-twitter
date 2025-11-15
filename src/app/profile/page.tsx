import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";
import LogoutButton from "@/components/LogoutButton";
import Link from "next/link";

export default async function ProfilePage() {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if(!token){
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
                <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
                    <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Giriş Yapılmamış</h2>
                    <p className="text-gray-600 mb-6">Profili görüntülemek için giriş yapmalısınız</p>
                    <Link 
                        href="/login"
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                        </svg>
                        Giriş Yap
                    </Link>
                </div>
            </div>
        )
    }

    const payload = verifyToken(token as string) as any;
    if(!payload){
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
                <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
                    <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Geçersiz Oturum</h2>
                    <p className="text-gray-600 mb-6">Lütfen tekrar giriş yapın</p>
                    <Link 
                        href="/login"
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
                    >
                        Tekrar Giriş Yap
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                        Profilim
                    </h1>
                    <p className="text-gray-600">Hesap bilgileriniz ve istatistikleriniz</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Profile Card */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-md">
                                    {payload.username?.charAt(0).toUpperCase() || 'U'}
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-800">{payload.username}</h2>
                                    <p className="text-gray-600">{payload.email}</p>
                                    <span className="inline-block mt-1 px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                                        Aktif
                                    </span>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div className="bg-blue-50 rounded-lg p-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600">Kullanıcı Adı</p>
                                            <p className="font-semibold text-gray-800">{payload.username}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-purple-50 rounded-lg p-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                            <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-600">E-posta</p>
                                            <p className="font-semibold text-gray-800">{payload.email}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-gray-200 pt-4">
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">Hesap İşlemleri</h3>
                                <div className="flex flex-wrap gap-3">
                                    <LogoutButton />
                                    <Link 
                                        href="/settings" 
                                        className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-blue-500 hover:text-blue-600 transition-all duration-200"
                                    >
                                        Ayarlar
                                    </Link>
                                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-purple-500 hover:text-purple-600 transition-all duration-200">
                                        Şifre Değiştir
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Sidebar */}
                    <div className="space-y-6">
                        {/* Activity Stats */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Hesap İstatistikleri</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Üyelik Süresi</span>
                                    <span className="font-semibold text-gray-800">Yeni Üye</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Profil Tamamlama</span>
                                    <span className="font-semibold text-blue-600">%60</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Son Giriş</span>
                                    <span className="font-semibold text-gray-800">Şimdi</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="bg-white rounded-2xl shadow-lg p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Hızlı İşlemler</h3>
                            <div className="space-y-3">
                                <Link 
                                    href="/posts" 
                                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                >
                                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9m0 0v2m0-2a2 2 0 012-2h2a2 2 0 012 2m-6 5v10m6-10v10" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">Gönderilerim</span>
                                </Link>
                                <Link 
                                    href="/edit-profile" 
                                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                >
                                    <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700">Profili Düzenle</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}