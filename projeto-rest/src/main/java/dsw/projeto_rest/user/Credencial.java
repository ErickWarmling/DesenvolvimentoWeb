package dsw.projeto_rest.user;

import org.mindrot.jbcrypt.BCrypt;

import java.io.UnsupportedEncodingException;
import java.security.NoSuchAlgorithmException;

public class Credencial {

    private String username;
    private String senha;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String[] getSenhaCriptografada() throws NoSuchAlgorithmException, UnsupportedEncodingException {
        final String salt = BCrypt.gensalt();
        String senha = BCrypt.hashpw(this.senha, salt);
        return new String[] {senha, salt};
    }
}
