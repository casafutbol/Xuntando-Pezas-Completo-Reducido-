import { useEffect, useState } from "react";
import { Customer } from "../TIPOS/customer";
import { endpoints, urlServidorPCTraballadores } from "../DATOS/datos";

export function useCustomers() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCustomers = async () => {
      try {
        const response = await fetch(`${urlServidorPCTraballadores}/${endpoints.customers}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const loadedCustomers: Customer[] = await response.json();
        setCustomers(loadedCustomers);
      } catch (error) {
        setError((error as Error).message);
        console.error("Error loading customers:", error);
      } finally {
        setLoading(false);
      }
    };

    loadCustomers();
  }, []);

  return { customers, loading, error };
}
