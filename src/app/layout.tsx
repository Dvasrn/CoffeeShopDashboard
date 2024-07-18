import DashboardBody from "./dashboardBody/page";
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <div>
          <DashboardBody>
            <>123</>
          </DashboardBody>
        </div>
      </body>
    </html>
  );
}
