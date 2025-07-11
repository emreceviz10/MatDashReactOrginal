import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/css/globals.css'
import App from './App.tsx'
import Spinner from './views/spinner/Spinner.tsx'
import { CustomizerContextProvider } from './context/CustomizerContext.tsx'
import './utils/i18n';
import { DashboardContextProvider } from './context/DashboardContext/DashboardContext.tsx'
import './_mockApis';
import { AuthProvider } from './guards/firebase/FirebaseContext.tsx'


createRoot(document.getElementById('root')!).render(
  <DashboardContextProvider>
  <CustomizerContextProvider>
<Suspense fallback={<Spinner />}>
      <AuthProvider>
        <App />
        </AuthProvider>
    </Suspense>
    </CustomizerContextProvider>
    </DashboardContextProvider>
    ,
)
