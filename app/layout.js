import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
	weight: ['400', '700'],
	subsets: ['cyrillic'],
	variable: '--font-montserrat',
})

export default function RootLayout({ children }) {
	return (
		<html lang='ru'>
			<body className={`${montserrat.className}`}>{children}</body>
		</html>
	)
}
