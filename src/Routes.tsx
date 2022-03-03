import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Home } from '@/pages/Home/Index'
import { NotFound } from './pages/NotFound/Index'
import { Pokemon } from '@/pages/Pokemon/Index'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<Pokemon />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
