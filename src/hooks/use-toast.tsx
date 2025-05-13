
import * as React from "react"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }

// Toast hook and functions adapted for mobile experience
export const useToast = () => {
  return {
    toast: (message: string, options?: any) => {
      return window.toast(message, options)
    },
    success: (message: string, options?: any) => {
      return window.toast.success(message, options)
    },
    error: (message: string, options?: any) => {
      return window.toast.error(message, options)
    },
    warning: (message: string, options?: any) => {
      return window.toast.warning(message, options)
    },
    info: (message: string, options?: any) => {
      return window.toast.info(message, options)
    },
    loading: (message: string, options?: any) => {
      return window.toast.loading(message, options)
    },
    dismiss: (toastId?: string) => {
      if (toastId) {
        window.toast.dismiss(toastId)
      } else {
        window.toast.dismiss()
      }
    },
  }
}

export const toast = {
  ...window.toast,
  success: (message: string, options?: any) => window.toast.success(message, options),
  error: (message: string, options?: any) => window.toast.error(message, options),
  warning: (message: string, options?: any) => window.toast.warning(message, options),
  info: (message: string, options?: any) => window.toast.info(message, options),
  loading: (message: string, options?: any) => window.toast.loading(message, options),
}
