import React, { createContext, useContext, useState } from 'react';
import type { AuthContextType, UserProfile } from '../types';
import type { User as SupabaseUser } from '@supabase/supabase-js';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Mock user state
    const [user, setUser] = useState<SupabaseUser | null>(null);
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(false);

    const signOut = async () => {
        setUser(null);
        setProfile(null);
    };

    // In a real app, a login function would be provided via this context
    // for the LoginPage to use. For now, we'll just provide a null user.

    const value: AuthContextType = {
        user,
        profile,
        loading,
        signOut,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
