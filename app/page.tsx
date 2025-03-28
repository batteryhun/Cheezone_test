export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="mb-8 text-center">
        <h1 className="font-bold text-4xl text-yellow-500">Cheezone</h1>
        <h2 className="mt-2 text-xl text-gray-700">Cheezone Everywhere!</h2>
        <h2 className="mt-1 text-lg text-gray-600">
          당신의 입맛에 맞는 맛집을 추천해드립니다
        </h2>
      </div>
      <div className="flex space-x-4">
        <a
          href="/create-account"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          시작하기
        </a>
        <a
          href="#"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          로그인
        </a>
      </div>
    </div>
  );
}
