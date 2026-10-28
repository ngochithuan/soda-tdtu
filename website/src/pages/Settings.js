import { useTheme } from '../theme';
import './Page.css';

const themes = [
  { value: 'system', label: 'Theo hệ thống' },
  { value: 'light', label: 'Sáng' },
  { value: 'dark', label: 'Tối' },
];

function Settings() {
  const [theme, setTheme] = useTheme();

  return (
    <div className="page">
      <h1 className="page-title">Settings</h1>

      <section className="page-section">
        <h2>Giao diện</h2>
        <select
          className="theme-select"
          aria-label="Chế độ màu"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        >
          {themes.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {/* TODO: Change language (VN/EN) */}
      </section>
    </div>
  );
}

export default Settings;
