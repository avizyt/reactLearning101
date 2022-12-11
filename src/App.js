import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Home } from "./pages/Home"
// import { Profile } from "./pages/Profile"
// import { Contact } from "./pages/Contact"
import { Navbar } from "./pages/Navbar"
//



function App() {

    const client = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
            }
        }
    }
    );
    return (
        <div className="App">
            <QueryClientProvider client={client}>                       <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/profile" element={<Profile />} /> */}
                    {/* <Route path="/contact" element={<Contact />} /> */}
                    {/* <Route path="*" element={<h1>Page Not Found</h1>} /> */}
                </Routes>
            </Router>

            </QueryClientProvider>

        </div>

    )
}

export default App;
