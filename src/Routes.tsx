import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from '@/pages/Home/Index'
import { NotFound } from './pages/NotFound/Index'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
