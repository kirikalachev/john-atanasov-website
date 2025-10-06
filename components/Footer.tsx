export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-sm text-muted-foreground">
          <p className="mb-2">
            Създаден с вдъхновение от <span className="text-primary font-semibold">Джон Атанасов</span>
          </p>
          <p className="text-xs">© {new Date().getFullYear()} • Ден на Джон Атанасов</p>
        </div>
      </div>
    </footer>
  )
}
