import { useBrandSettings } from "@/lib/data";

const LOCAL_LOGO = "/images/logo/logo.png";
const DEFAULT_BRAND_NAME = "RAHIQ Parfums | رحيق";

export function BrandLogo({ className = "h-10 w-auto" }: { className?: string }) {
  const { data } = useBrandSettings();
  const src = data?.logo_url || LOCAL_LOGO;

  return (
    <img
      src={src}
      alt={data?.brand_name_en ?? DEFAULT_BRAND_NAME}
      className={className}
      loading="eager"
      decoding="async"
    />
  );
}

/**
 * The official brand name. Always rendered exactly as provided, on one line,
 * with a single shared type size for both scripts.
 */
export function BrandName({ className = "" }: { className?: string }) {
  const { data } = useBrandSettings();

  return (
    <span
      dir="ltr"
      className={`whitespace-nowrap font-bold tracking-[0.1em] text-foreground ${className}`}
    >
      {data?.brand_name_en ?? DEFAULT_BRAND_NAME}
    </span>
  );
}
