
import { useState } from "react";
import { toast } from "@/components/ui/sonner";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Using mailto link to open email client
      window.location.href = `mailto:kitzadalab@gmail.com?subject=Newsletter Subscription&body=Email para cadastro: ${email}`;
      
      toast({
        title: "Sucesso!",
        description: "Seu email será cadastrado em breve.",
      });
      
      setEmail("");
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível processar seu cadastro. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Seu endereço de email"
        required
        className="flex-1 px-4 py-3 bg-white bg-opacity-10 rounded-md border border-white border-opacity-20 focus:outline-none focus:border-neon-blue"
      />
      <button
        type="submit"
        disabled={isLoading}
        className="px-6 py-3 rounded-md bg-gradient-to-r from-neon-blue to-lab-green text-dark-navy font-bold disabled:opacity-50"
      >
        {isLoading ? "Enviando..." : "Inscrever"}
      </button>
    </form>
  );
}
